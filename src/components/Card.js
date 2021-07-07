import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => (
  <div className="card">
    <img src={''} alt={''} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">[imleikys]</h5>
      <Link to={'/profiler/' + 'daniljulev'} className="btn btn-primary">Открыть</Link>
    </div>
  </div>
)