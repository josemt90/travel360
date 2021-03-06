import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Navbar } from "../component/navbar";
import "../../styles/addSite.css";

export const AddSite = (props) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    fetch(process.env.BACKEND_URL + "/api/addSite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((resp) => resp.json());
  };

  return (
    <div className=" container-fluid protected">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-4">
          <h3 className="text-center text-white p-3">New Place</h3>

          <form>
            <div class="container-sm bg-light rounded  p-5">
              <div class="mb-3 ">
                <label for="name" class="form-label">
                  Place Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Add Name"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 ">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="Add City"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="location" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  placeholder="Add Localitation"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="video" class="form-label">
                  Video
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="video"
                  name="video"
                  placeholder="Add video"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  placeholder="Add Image"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Add description Place"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-danger"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
