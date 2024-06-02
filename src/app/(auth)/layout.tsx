export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="p-4 border-b">
          auth 21
        </div>
        {children}
    </>
  );
}
