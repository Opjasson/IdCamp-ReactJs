import Card from "./Card";
import Header from "./Header";

function News() {
    // data news
    const someNews = [
        {
            title: "CNN Acuire BEME",
            date: "March 20 2022",
            content: "CNN purchased Casey Neistat's Beme app for $25million.",
            image: "https://picsum.photos/600/400",
            category: "News",
            link: "#",
        },
        {
            title: "React and the WP-API",
            date: "March 19 2022",
            content:
                "The first ever decoupled starter theme for React & the WP-API.",
            image: "https://picsum.photos/600/400",
            category: "News",
            link: "#",
        },
        {
            title: "Nomad Lifestyle",
            date: "March 19 2022",
            content: "Learn our tips and tricks on living a nomadic lifestyle.",
            image: "https://picsum.photos/600/400",
            category: "Travel",
            link: "#",
        },
    ];

    // Merupakan komponen inti gabungan dari partikel partikel kecil komponen lainnya
    return (
        <div>
            <Header title="Berita terhangat" subtitle="desember 7 2024" />
            <Card
                title={someNews[0].title}
                date={someNews[0].date}
                content={someNews[0].content}
                image={someNews[0].image}
                kategori={someNews[0].category}
                link={someNews[0].link}
            />

            <Card
                title={someNews[1].title}
                date={someNews[1].date}
                content={someNews[1].content}
                image={someNews[1].image}
                kategori={someNews[1].category}
                link={someNews[1].link}
            />

            <Card
                title={someNews[2].title}
                date={someNews[2].date}
                content={someNews[2].content}
                image={someNews[2].image}
                kategori={someNews[2].category}
                link={someNews[2].link}
            />
        </div>
    );
}

export default News;
