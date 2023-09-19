import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="\">{props.title}</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="\">{props.homepage}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="\">{props.About}</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Enter title here',
    About: 'About page',
    homepage: 'Home Page',
};
