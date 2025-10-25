# Sanity CMS Setup Instructions

## Environment Variables

You need to add the following environment variables to your `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### How to get your Project ID:

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Copy the Project ID from the project settings

Or run this command in the terminal:
```bash
pnpm dlx sanity manage
```

## Starting Sanity Studio

1. Make sure your environment variables are set in `.env.local`
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Access Sanity Studio at: [http://localhost:3000/studio](http://localhost:3000/studio)

## Setting Up Your Content

Once you access the Studio, you need to create documents for each schema type:

### 1. Profile (Create 1 document)
- Name: Your full name
- First Name: Your first name
- Last Name: Your last name
- Bio: Short description about yourself
- Profile Image: Upload your profile picture
- Resume URL: Link to your resume

### 2. Projects (Create 3 documents for existing projects)

#### Project 1: Aldifest
- Title: `Aldifest`
- Slug: `aldifest`
- Description: Full project description
- Top Image: Upload the Aldi logo
- Bottom Image: Upload the Aldifest screenshot
- Background Color: `#3AC9F7`
- External Link: `https://aldifest.ie`
- Technologies:
  - Name: `ReactJS`, Icon: `FaReact`
  - Name: `GraphQL`, Icon: `GrGraphQl`
  - Name: `NextJS`, Icon: `TbBrandNextjs`
- Order: `1`
- Featured: `true`

#### Project 2: Blog Website
- Title: `Blog Website`
- Slug: `blogapp`
- Description: Full project description
- Top Image: (Optional - leave empty if no logo)
- Bottom Image: Upload blog app screenshot
- Background Color: `#1F2937`
- External Link: Your blog URL
- Technologies: Add relevant tech stack
- Order: `2`
- Featured: `true`

#### Project 3: Stageverse
- Title: `Stageverse`
- Slug: `stageverse`
- Description: Full project description
- Top Image: Upload Stageverse logo
- Bottom Image: Upload screenshot
- Background Color: `linear-gradient(#6e80ef, #61dfc7)`
- External Link: Your project URL
- Technologies: Add relevant tech stack
- Order: `3`
- Featured: `true`

### 3. Experience (Create 2 documents)

#### Experience 1: Raftlabs
- Title: `Raftlabs`
- Logo: Upload Raftlabs logo
- Company Website: `https://www.raftlabs.co/`
- Duration: `Feb 2023 - Present`
- Description List:
  - `Collaborated on creating responsive and visually appealing UIs for client websites using Tailwind CSS, Ant Design, and Next.js`
  - `Implemented GraphQL and Apollo Client to integrate UI components with the backend, ensuring seamless data communication and efficient rendering.`
- Order: `1`

#### Experience 2: Exposys Data Labs
- Title: `Exposys Data Labs`
- Logo: Upload company logo
- Company Website: `http://exposysdata.com/`
- Duration: `Sep 2021 - Oct 2021`
- Description List:
  - `Contributed to the development of a peer-to-peer video conferencing feature, enhancing user experience and optimizing performance.`
- Order: `2`

### 4. Social Links (Create multiple documents)

Create one document for each social link:

1. GitHub
   - Platform: `GitHub`
   - URL: `https://www.github.com/ayush391`
   - Icon: `GithubOutlined`
   - Order: `1`

2. Resume
   - Platform: `Resume`
   - URL: Your resume URL
   - Icon: `FilePdfOutlined`
   - Order: `2`

3. LinkedIn
   - Platform: `LinkedIn`
   - URL: Your LinkedIn URL
   - Icon: `LinkedinOutlined`
   - Order: `3`

4. LeetCode
   - Platform: `LeetCode`
   - URL: `https://leetcode.com/ayush391`
   - Icon: `CodeOutlined`
   - Order: `4`

5. Mail
   - Platform: `Mail`
   - URL: `mailto:stringakaak@gmail.com`
   - Icon: `MailOutlined`
   - Order: `5`

### 5. Site Settings (Create 1 document)
- Footer Copyright: `© 2023 All Rights Reserved.`
- Site Title: `Ayush Kapoor - Portfolio`
- Site Description: `Portfolio website of Ayush Kapoor, a front-end developer passionate about creating accessible and creative web experiences.`

## Deploying Sanity Studio

Once you're ready to deploy the Studio to Sanity's servers:

```bash
pnpm run sanity-deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

## Next Steps

After setting up all your content in Sanity Studio, the next phase will involve:
1. Updating the frontend components to fetch data from Sanity
2. Creating dynamic routes for projects
3. Testing the integration
4. Deploying to production

## Troubleshooting

- **Can't access Studio**: Make sure environment variables are set correctly
- **Missing schemas**: Clear `.next` folder and restart dev server
- **Images not loading**: Ensure images are uploaded to Sanity, not using local paths