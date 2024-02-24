import React from 'react'

export default function Navbar(props) {
  const navigation = [
    { name: 'Low dimensional', href: '/plots/low_dimensional', current: true},
    { name: 'Heatmap', href: '/plots/heatmap', current: true},
    { name: '', href: '#', current: true},
    { name: '', href: '#', current: true},
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LifeSCS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navigation.map((item) => {
                const classes = "nav-link active"
                return (
                  <li className="nav-item">
                    <a className="nav-link active" key={item.name} href={item.href} >{item.name}</a>
                  </li>
                )
              })}
           </ul>
          </div>
        </div>
      </nav>
      {props.children}

    </div>
  )
}
