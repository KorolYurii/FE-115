// const options = {
//     method: 'GET'
// }


class App extends React.Component {
    constructor(props) {
        super(props)
        

    }
   
   
    render() {
        return (
            <section className="page_wraper">
                <HeaderSection/>
                <Banner/>
                <ContentSection/>
            </section>
        )
    }
  
}
class HeaderSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
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
}


class Banner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="banner_img">

            </div>
        )
    }
}
class ContentSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="news_wrapper">
                <div className="container">
                    <div className="blog">
                        <h2>Blog</h2>
                        <ul className="blog_list">
                            <li className="blog_item">
                                <p>Леопарди чудово лазять по деревах. Навіть без розбігу вони можуть забратися на гілки, що починаються на 5-метровій висоті, піднімаючись по стовбуру після стрибка.</p>
                            </li>
                            <li className="blog_item">
                                <p>Кішки нявкають, тільки коли спілкуються з людьми.</p>
                            </li>
                            <li className="blog_item">
                                <p>Дорослий слон за добу може випити майже сотню літрів води.</p>
                            </li>
                            <li className="blog_item">
                                <p>Леви володіють найменшим серцем по відношенню до розмірів тіла серед усіх що живуть на нашій планеті диких тварин, які є хижаками.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="news">
                    <h2>News</h2>
                        <ul className="news_list">
                            <li className="news_item">
                                <p>Джин зі слонячих екскрементів набуває популярності в світі: які у нього ціна та смак.</p>
                            </li>
                            <li className="news_item">
                                <p>В Африці через браконьєрів еволюціонували слони: вчені розповіли про зміни та пояснили, як так сталось.</p>
                            </li>
                            <li className="news_item">
                                <p>Вперше за 80 років: на Шрі-Ланці народилися слоненята-близнюки.</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}




const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))


