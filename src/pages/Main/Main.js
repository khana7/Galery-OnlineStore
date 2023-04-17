import Card from '../../components/Card/Card'
import First from '../../assets/first.png'
import Second from '../../assets/second.png'
import Third from '../../assets/third.png'
import Fourth from '../../assets/fourth.png'

import './Main.scss'
// import '../../components/Card/Card.scss'

const arr = [
    {
        id: 1,
        img: First,
        title: "«Рождение Венеры» Сандро Боттичелли",
        firstPrice: "2 000 000 $",
        secondPrice: "1 000 000 $",
        isActive: true,
    },
    {
        id: 2,
        img: Second,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        firstPrice: "",
        secondPrice: "3 000 000 $",
        isActive: true,
    },
    {
        id: 3,
        img: Third,
        title: "«Сотворение Адама» Микеланджело",
        firstPrice: "6 000 000 $",
        secondPrice: "5 000 000 $",
        isActive: true,
    },
    {
        id: 4,
        img: Fourth,
        title: "«Урок анатомии»  Рембрандт",
        firstPrice: "",
        secondPrice: "Продана на аукционе",
        isActive: false,
    }
]

export const Main = () => {

    return (
        <>
            <section className='main'>
                <div className='container'>
                    <div className='main__title'>Картины эпохи Возрождения</div>
                    <div className='main__wrapper'>
                        {arr.map((card) => {
                            return <Card key={card.id} id={card.id} img={card.img} title={card.title} firstPrice={card.firstPrice} secondPrice={card.secondPrice} isActive={card.isActive} isDisabled={card.id === 4} />
                        })}
                    </div>
                </div>
            </section>
        </>


    )
}

