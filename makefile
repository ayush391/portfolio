# Makefile

# --- Configuration ---
# Your PGP Key ID. Get it from 'gpg --list-secret-keys --keyid-format LONG'
PGP_KEY_ID ?= BFC4102969C96E66EA6E270FB86C4C98F0F6DCBF

# The unencrypted source file for your secrets (NOT committed to Git)
UNENCRYPTED_SECRETS_FILE ?= .env.local

# The encrypted file that WILL be committed to Git
ENCRYPTED_SECRETS_FILE ?= .env.enc

# The SOPS config file (WILL be committed to Git)
SOPS_CONFIG_FILE ?= .sops.yaml

# --- SOPS Targets ---

# Initializes the .sops.yaml configuration file
.PHONY: sops-init
sops-init:
	@echo "Creating or updating $(SOPS_CONFIG_FILE) with PGP Key ID: $(PGP_KEY_ID)"
	@if [ -f "$(SOPS_CONFIG_FILE)" ]; then \
		grep -q "pgp: \"$(PGP_KEY_ID)\"" "$(SOPS_CONFIG_FILE)" || \
		(echo "Adding PGP Key ID to existing $(SOPS_CONFIG_FILE)"; \
		yq eval '.creation_rules[0].pgp = "$(PGP_KEY_ID)"' -i "$(SOPS_CONFIG_FILE)"); \
	else \
		echo "Creating new $(SOPS_CONFIG_FILE)"; \
		echo "creation_rules:" > "$(SOPS_CONFIG_FILE)"; \
		echo "  - path_regex: \\.env\\.enc$$" >> "$(SOPS_CONFIG_FILE)"; \
		echo "    pgp: \"$(PGP_KEY_ID)\"" >> "$(SOPS_CONFIG_FILE)"; \
	fi
	@echo "SOPS configuration updated in $(SOPS_CONFIG_FILE)."

# Creates a new unencrypted secrets file (if it doesn't exist) for initial setup
.PHONY: sops-create-unencrypted
sops-create-unencrypted:
	@if [ ! -f "$(UNENCRYPTED_SECRETS_FILE)" ]; then \
		echo "Creating initial unencrypted secrets file: $(UNENCRYPTED_SECREMENTED_SECRETS_FILE)"; \
		echo "VITE_API_URL: \"http://localhost:3000/api\"" > "$(UNENCRYPTED_SECRETS_FILE)"; \
		echo "DATABASE_URL: \"postgresql://user:password@localhost:5432/db\"" >> "$(UNENCRYPTED_SECRETS_FILE)"; \
		echo "# Add your sensitive environment variables here" >> "$(UNENCRYPTED_SECRETS_FILE)"; \
		echo "Remember to add $(UNENCRYPTED_SECRETS_FILE) to your .gitignore!"; \
	else \
		echo "$(UNENCRYPTED_SECRETS_FILE) already exists. Skipping creation."; \
	fi

# Encrypts the unencrypted secrets file into the encrypted .env.enc
.PHONY: sops-encrypt
sops-encrypt:
	@echo "Encrypting $(UNENCRYPTED_SECRETS_FILE) into $(ENCRYPTED_SECRETS_FILE)..."
	@sops --encrypt --output "$(ENCRYPTED_SECRETS_FILE)" "$(UNENCRYPTED_SECRETS_FILE)"
	@echo "Encryption complete. $(ENCRYPTED_SECRETS_FILE) is ready to be committed."

# Decrypts the encrypted .env.enc for viewing/editing in a temporary file
# IMPORTANT: This creates a plaintext file! Delete it after use.
.PHONY: sops-decrypt-temp
sops-decrypt-temp:
	@echo "Decrypting $(ENCRYPTED_SECRETS_FILE) to $(UNENCRYPTED_SECRETS_FILE) for editing. Be careful!"
	@sops --decrypt "$(ENCRYPTED_SECRETS_FILE)" > "$(UNENCRYPTED_SECRETS_FILE)"
	@echo "Decrypted to $(UNENCRYPTED_SECRETS_FILE). Edit it, then run 'make sops-encrypt' and delete $(UNENCRYPTED_SECRETS_FILE)."

# Opens the encrypted file directly in SOPS for editing.
# SOPS will decrypt, open in your default editor (e.g., nano, vim), then re-encrypt on save.
.PHONY: sops-edit
sops-edit:
	@echo "Opening $(ENCRYPTED_SECRETS_FILE) in SOPS for editing..."
	@sops "$(ENCRYPTED_SECRETS_FILE)"
	@echo "SOPS edit complete. $(ENCRYPTED_SECRETS_FILE) updated."

# Cleans up temporary files (e.g., the unencrypted secrets.yaml)
.PHONY: sops-clean
sops-clean:
	@echo "Cleaning up $(UNENCRYPTED_SECRETS_FILE)..."
	@-rm "$(UNENCRYPTED_SECRETS_FILE)" || true
	@echo "Cleanup complete."

# Default target
.PHONY: all
all: sops-edit
