import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
    title: "설스터디(SeolStudy) - 멘티",
    description: "학습 코칭 플랫폼 멘티용 모바일 앱",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <div className="mobile-container relative bg-white min-h-screen">
                    <main className="pb-24 min-h-screen">
                        {children}
                    </main>
                    <BottomNav />
                </div>
            </body>
        </html>
    );
}
