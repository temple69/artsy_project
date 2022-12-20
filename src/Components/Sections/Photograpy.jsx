import React from 'react'
import kangaro from '../../assets/photography_sections_images/kangaro.png'
import flower from '../../assets/photography_sections_images/flower.png'
import girl from '../../assets/photography_sections_images/girl.png'
import eyeglass from '../../assets/photography_sections_images/eyeglass.png'

const Photograpy = () => {
  return (
    <section className="mt-[60px] w-full">
        <h1 className="text-[80px] font-semibold text-[var(--main-color)] w-[95%]  text-center">
        Photography is poetry & beautiful untold stories
        </h1>
        <p className="text-center font-medium text-[28px] my-5">Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
        <article className="flex flex-row">
        <img src={eyeglass} alt="girl with glass" />
        <img src={flower} alt="flower in girls hand" />
        <img src={girl} alt="girl standing" />
        <img src={kangaro} alt="kangaro" />
        </article>
    </section>
  )
}

export default Photograpy