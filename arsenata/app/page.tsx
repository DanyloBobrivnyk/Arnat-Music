import Container from "@/components/shared/container/Container";
import AlbumTileGrid from "@/components/features/album/AlbumTileGrid";
import MyNewComponent from "@/components/MyNewComponent";

export default function HomePage() {
    let arr = ['The Power of Mindfulness: Achieving Inner Peace and Clarity'
        ,'Tech Trends 2023: Innovations Shaping the Future'
        ,'Travel Destinations for the Adventurous Soul: Exploring the World'
        ,'Navigating the Digital Age: Online Safety and Privacy Tips'];
    return (
        <main className="overflow-hidden">
            <Container>
                {/*<AlbumTileGrid articles={arr}></AlbumTileGrid>*/}
                <MyNewComponent></MyNewComponent>
            </Container>
        </main>
    )
}
