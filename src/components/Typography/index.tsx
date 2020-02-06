import React from 'react';

const Typography: React.FC = () => {
  return (
    <div className="row mt-sm-4 mt-md-0">
      <div className="col-sm-12 col-md-8 text-sm-center text-md-left mt-sm-4 mt-md-0">
        <h3>An important heading</h3>
        <p className="lead">A sort of important subheading can go here, which is larger and gray</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut</p>
      </div>
      <div className="col-sm-12 col-md-4 mt-sm-4 mt-md-0">
        <h3 className="mb-4">Secondary Menu</h3>
        <ul className="nav flex-column nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Typography;