import React from 'react'

export default function SingleUser({id, photo, name, verified, title, review}) {
    return (
      <section className="user">
        <section className="user__profile">
          <img className="user__profile-photo" src={photo} alt={name} />
          <p className="user__profile-name">{name}</p>
          <p className="user__profile-verified">
            {verified ? "Verified Graduate" : "Not Verified"}
          </p>
        </section>
        <section className="user__review">
          <h2 className="user__review-title">{title}</h2>
          <p className="user__review-text">{review}</p>
        </section>
      </section>
    );
}
