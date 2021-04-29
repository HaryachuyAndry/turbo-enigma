import React, { useState, useEffect } from 'react'
import { getFilm } from '../api/film'
import { useParams } from "react-router-dom"
import timeIcon from "../images/time-icon.png"
import "./filmDetails.scss"




const FilmDetail = () => {
    const [dataMovie, setDataMovie] = useState({});
    let { id } = useParams();

    const fetchData = async () => {
        const response = await getFilm(id)
        setDataMovie(response.data)
    }

    useEffect(() => { fetchData() })

    console.log(dataMovie)

    return (
        <div className="film-detail-container">
            <div className="film-detail-block">
                <div className="details-block">
                    <div className="details-block__title">{dataMovie.title}</div>
                    <div className="details-block__tagline">"{dataMovie.tagline}"</div>
                    <div className="details-block__release-date">Data release: {dataMovie.release_date}</div>
                    <div className="details-block__revenue">Revenue: {dataMovie.revenue}$</div>
                    <div className="details-block__budget">Budget: {dataMovie.budget}$</div>
                    <div className="details-block__runtime">Runtime <img src={timeIcon} alt="" /> {dataMovie.runtime} min  </div>
                    <div className="details-block__status">Status: {dataMovie.status}</div>
                    <div className="details-block__language">Original language: {dataMovie.original_language}</div>
                    <div className="details-block__homepage">{dataMovie.homepage}</div>
                    <div className="details-block__overview">Overview: {dataMovie.overview}</div>
                </div>
                <div className="poster-block">
                    <img src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`} alt="" />
                    <div>average grade {dataMovie.vote_average}/10</div>
                </div>

            </div>


            <div className="prod-companies-container">
                {dataMovie.production_companies && dataMovie.production_companies.map((item, index) => {
                    return (
                        <div className="company-block">
                            <div>{item.name}</div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt="" />
                        </div>

                    )
                })
                }
            </div>
        </div >
    )
}

export default FilmDetail