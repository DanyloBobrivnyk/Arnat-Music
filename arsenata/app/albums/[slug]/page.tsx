import Container from "@/components/shared/container/Container";
import React from "react";
import AlbumContent from "@/components/features/album/AlbumContent";

export default function AlbumPage() {
    return (
        <main className="overflow-hidden">
            <Container>
                <AlbumContent></AlbumContent>
            </Container>
        </main>
    )
}
