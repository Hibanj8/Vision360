"use client"
import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] duration-700 dark:bg-dark overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span data-aos="fade-up"  className="uppercase text-purple-900 mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 data-aos="fade-up" className="text-white duration-700 dark:text-black mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p data-aos="fade-up" className="text-body-color text-white duration-700 dark:text-black">
                At Vision360°, we have completed a variety of innovative projects in design, web development, 
                and digital marketing, each carefully crafted to meet the unique needs of our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color text-black/60 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color text-black/60 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color text-black/60 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color text-black/60 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="/Project-imgs/Design Project -3-/Massurance-couverture.png"
              category="Design"
              title="Branding: Massurance"
              button="View Details"
              buttonHref="/projects/Details-Logo-Massurance"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Project-imgs/Marketing Project -1-/Cleanspace-couverture.png"
              category="marketing"
              title="Marketing: CleanSpace"
              button="View Details"
              buttonHref="/projects/Details-Marketing-CleanSpace"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Project-imgs/Design Project -3-/Elhani shop-couverture.png"
              category="Design"
              title="Branding: ElHani.shop"
              button="View Details"
              buttonHref="/projects/Details-Logo-Elhani.shop"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Project-imgs/Developpement Project -2-/Massurance.png"
              category="Development"
              title="Web Site: Massurance"
              button="View Details"
              buttonHref="/projects/Details-webSite-Massurance"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Project-imgs/Design Project -3-/CleanSpace-couverture.png"
              category="Design"
              title="Branding: CleanSpace"
              button="View Details"
              buttonHref="/projects/Details-Logo-Cleanspace"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Project-imgs/Developpement Project -2-/cleanSpace.png"
              category="Development"
              title="Web Site: CleanSpace"
              button="View Details"
              buttonHref="/projects/Details-webSite-CleanSpace"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
       data-aos="flip-up" className={`w-full px-4 md:w-1/2 xl:w-1/3  ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-2xl bg-white/80 duration-700 dark:bg-black/60 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-black duration-700 dark:text-white mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className=" text-black duration-700 dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color hover:border-primary hover:bg-primary inline-block border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium text-white dark:text-black hover:text-black hover:dark:text-white relative nded-full overflow-hidden bg-black/60 dark:bg-white rounded-full transition-all duration-400 ease-in-out shadow-2xl hover:scale-105 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#C287BB] before:to-[#e7b3e0b7] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              {button}
            </a>
          </div> 
        </div>
      </div>
    </>
  );
};
