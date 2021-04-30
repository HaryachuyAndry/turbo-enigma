import React, { useEffect, useState } from 'react'
import { getFilms } from "../api/films"
import { getSearchMovies } from "../api/search"
import { Link, useHistory, useLocation } from "react-router-dom";
import { Formik, Form, Field } from 'formik'
import "./index.scss"

function TitlePage() {
    const [dataMovieList, setDataMovieList] = useState({});


    const fetchData = async () => {
        const response = await getFilms()
        setDataMovieList(response.data)
    }

    useEffect(() => { fetchData() }, [])

    const history = useHistory();
    const location = useLocation();

    const search = new URLSearchParams(location.search).get('search')

    useEffect(() => {
        (async () => {
            if (!search) return;
            const response = await getSearchMovies({ query: search })
            setDataMovieList(response.data)
        })()
    }, [search])

    return (
        <div className="container" >
            <div className="form-block">
                <Formik
                    initialValues={{ term: '' }}
                    onSubmit={(values) => history.push({ search: `?search=${values.term}` })}
                >
                    <Form>
                        <Field type="text" name="term" className="form-block__input" />
                        <button className="form-block__button" type="submit" >Search</button>
                    </Form>
                </Formik>
            </div>
            <div className="list-block">
                {dataMovieList.results && (dataMovieList.results.length !== 0) ? (dataMovieList.results.map((item, index) => {
                    return (
                        <div key={index} className="item-block">
                            <div className="item-block__title"><Link to={`/films/${item.id}`}><div className="elem">{item.title} </div></Link></div>
                            <Link to={`/films/${item.id}`}><img className="item-block__img" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" /></Link>
                            <div className="item-block__description">{item.overview} </div>
                            <div className="item-block__popularity"> Popularity {item.popularity} </div>
                            <div className="item-block__release"> Date release: {item.release_date} </div>
                        </div>
                    )
                })) : (<div className="list-block__empty">Nothing was found for your query</div>)}
            </div>

        </div>
    )
}

export default TitlePage