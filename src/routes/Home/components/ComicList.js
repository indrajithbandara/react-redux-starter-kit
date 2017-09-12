import React from 'react';

export const Comic = (...props) => (
    <li className="comic-item">
        <div className="comic-card">
            <img />
            <h2>Comic name</h2>
            <button className="button js-add">Add to favourites</button>
        </div>
    </li>
);

export default class ComicsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.GetComics();
  }

  GetComics() {
    return fetch('https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288')
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  }

  render() {
    // const persons = this.state.person.map((item, i) => {
    //   return <div>
    //     <h1>{item.name.first}</h1>
    //     <span>{item.cell}, {item.email}</span>
    //   </div>
    // });

    return (
        <div id="layout-content" className="layout-content-wrapper">
            <div className="comic-list">Comics go here...</div>
        </div>
    );
  }
};
