import PageTransition from "../page-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
