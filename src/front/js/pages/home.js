import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { CardList } from "../component/cardList";
import { SearchSite } from "../component/search-site";
import titulo from "../../img/titulo.jpg";
import { Card } from "../component/card.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  /*
  useEffect(() => {
    actions.getListSites();
  }, []);
*/
  return (
    <div className="container-fluid px-0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div className="row">
        <div className="header">
          <Navbar />

          <h5 className="titulo text-dark text-center">
            {" "}
            <div className="d-flex justify-content-center opacity-75">
              <h1 className="row text-secondary mx-4 border-bottom">
                Barcelona
              </h1>

              <h1 className="row text-secondary mx-4 border-bottom">
                Nueva York
              </h1>

              <h1 className="row text-secondary mx-4 border-bottom">Roma</h1>
            </div>
            <div className="d-flex justify-content-center  opacity-75">
              <h3 className="row text-dark mx-4">Sagrada Familia</h3>
              <h3 className="row text-danger mx-4">La séptima avenida</h3>
              <h3 className="row text-dark mx-3">El coliseo</h3>
              <h3 className="row text-danger mx-3">La Alhambra</h3>
            </div>
            Travel<span className="text-danger">360</span>
          </h5>
        </div>
      </div>
      <SearchSite />

      {/* Resume */}
      <div className="resume container-fluid">
        <div className="row">
          <CardList />
        </div>

        <div className="row ">
          <div className="col-12  col-sm-6 p-4">
            <div
              id="carouselExampleCaptions"
              className="carousel slide shadow p-3 mb-5 bg-body rounded"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://educacion30.b-cdn.net/wp-content/uploads/2016/11/realidad-virtual-microsoft-978x600.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                    width="auto"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>The world in one click</h4>
                    <p className="fw-bold">
                      Visit anywhere in the world and live the experience{" "}
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.virtualreality.com.co/images/video-360-colombia-immersive-video-360-slider.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                    width="auto"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Dive into the deep end!!!</h4>
                    <p className="fw-bold">
                      Virtual glasses, smartphone or laptop you can access and
                      visit amazing places.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://ep01.epimg.net/elviajero/imagenes/2020/04/02/actualidad/1585815147_832029_1585815375_noticia_normal.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                    width="auto"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Your own 360º virtual video profile!!!</h4>
                    <p className="fw-bold">
                      You can create your own experiences and enjoy that of
                      other users.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className=" col-12 col-sm-6 mt-5">
            <div class="card  border-0">
              <div class="card-body ">
                <h4 class="card-title about">About Us</h4>
                <p class="card-text textAbout">
                  Where does it come from? Contrary to popular belief, Lorem
                  Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
                <h3 className="text-center"></h3>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center border-bottom"></div>

        {/* parte 2************************************************************************/}

        <div className="row ">
          <div className="col-12  col-sm-6 py-5">
            <div class="row g-0 shadow p-4 mb-3 bg-body rounded">
              <div className="col-sm-6 col-md-8 p-3  infoCard">
                <h5>Athens</h5>
                The city is a place chosen by thousands of tourists a year who
                enjoy its culture, its museums, its spectacular views, its
                neighborhoods, its gastronomy and traditions. for being a place
                fascinating and full of history, traveling to Athens is a plan
                that you have to do sometime in your life
              </div>
              <div className="col-6 col-md-4">
                <img
                  className="rounded"
                  src="https://www.il-colosseo.it/images/Il_Foro_Romano/Foro_Romano_Colosseo_04.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="row g-0 shadow p-3 mb-2 bg-body rounded">
              <div className="col-sm-6 col-md-8 p-3 infoCard">
                <h5>machu picchu</h5>
                Traveling to Machu Picchu is the dream of practically everyone
                time to plan a trip to Peru. Being able to enter the ancient
                lost city of the Incas without a doubt, it is something that is
                remains in the memory forever of those who have that
                opportunity. Not for nothing is the iconic symbol of the country
                and one of the new wonders of the world, the largest
                archaeological site important in South America. Surely if you
                are planning a route through Peru, you want to include Machu
                Picchu at some point of she. Precisely in this complete guide
                you will find all the information you need to organize your
                visit to Machu Picchu, from how to get there, where and how to
                buy your tickets, what route to do, tips and much more.
              </div>
              <div className="col-6 col-md-4">
                <img
                  className="rounded"
                  src="https://viajes.nationalgeographic.com.es/medio/2019/06/06/macu_5da3ead6_1200x630.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-6 mt-5">
            <div class="col shadow p-3 mb-5 bg-body rounded">
              <div class="card ">
                <iframe
                  width="auto"
                  height="310"
                  src="https://www.youtube.com/embed/-UH3irenwjA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body ">
                  <h4 class="card-title pb-2">Travel around the world</h4>
                  <p class="card-text ">
                    Live the experience of visiting the most incredible places
                    of the world without having to take a plane!!!
                  </p>
                  <h5>
                    Record your experience and share it with{" "}
                    <span class="badge bg-danger ">Us !!!</span>
                  </h5>

                  <h3 className="text-center">
                    All Thanks to Virtual Reality!!!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid mb-5   ">
        <h1 className="text-danger px-5"></h1>
        <div className=" container">
          <div className="row">
            {store.allSites.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.place_name}
                  img={item.url_img}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
