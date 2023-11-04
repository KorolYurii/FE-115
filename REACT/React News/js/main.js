function App() {
    return (
        <section className="page_wraper">
            <HeaderSection/>
            <Banner/>
            <div className="news_wrapper">
                <div className="container">
                    <BlogSection/>
                    <NewsSection/>
                </div>
            </div>

        </section>
    )
}

function HeaderSection() {
    return (
        <div className="header_wrapper" >
            <div className="container">
                <div className="header_list">
                    <div className="header_item"><a href="#">logo</a></div>
                    <div className="header_item">The best of the best blog</div>
                    <div className="header_item">
                        <ul className="social_list">
                            <li className="social_item"><a href="#">a</a></li>
                            <li className="social_item"><a href="#">s</a></li>
                            <li className="social_item"><a href="#">d</a></li>
                            <li className="social_item"><a href="#">f</a></li>
                            <li className="social_item"><a href="#">e</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
function Banner() {
    return (
        <div className="banner_img"></div>
    )
}


function BlogSection() {
    let blogItem;
    if(blogList.length){
        blogItem=blogList.map((card, text) => {
            return <BlogContentItem item={card} key={text}/>
        })
    }
    return (
        <div className="blog">
            <h2>Blog</h2>
            {blogItem}            
        </div>        
    )
}

function BlogContentItem(props) {
    const {text} = props.item
    return(
        <div className="blog_item">
            <p>{text}</p>
        </div>
    )
}

function NewsSection() {
let newsItem;
if(newsList.length) {
    newsItem = newsList.map((card, text) => {
        return <NewsContentItem item={card} key={text}/>
    })
}
    return(
        <div className="news">
            <h2>News</h2>
            {newsItem}
        </div>            
    )
}

function NewsContentItem(props) {
    const {text} = props.item
    return(
        <div className='news_item'>
            {text}
        </div> 
    )
}
const blogList = [
    {
        text: 'Леопарди чудово лазять по деревах. Навіть без розбігу вони можуть забратися на гілки, що починаються на 5-метровій висоті, піднімаючись по стовбуру після стрибка.'
    },
    {
        text: 'Кішки нявкають, тільки коли спілкуються з людьми.'  
    },
    {
        text: 'Дорослий слон за добу може випити майже сотню літрів води.'
    },
    {
        text: 'Леви володіють найменшим серцем по відношенню до розмірів тіла серед усіх що живуть на нашій планеті диких тварин, які є хижаками.'
    }
]
const newsList = [
    {
        text:'Джин зі слонячих екскрементів набуває популярності в світі: які у нього ціна та смак.'
    },
    {
        text:'В Африці через браконьєрів еволюціонували слони: вчені розповіли про зміни та пояснили, як так сталось.'
    },
    {
        text:'Вперше за 80 років: на Шрі-Ланці народилися слоненята-близнюки.'
    }
]

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))


