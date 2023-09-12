import React from 'react'

const Comments = ({author, content, date, imgSrc}) => {
  return (
    <li>
    <div class="comment-card">
      <blockquote class="card-text">
      “{content}“
      </blockquote>

      <div class="profile-card">
        <figure class="profile-banner img-holder">
          <img
            src={imgSrc}
            width="32"
            height="32"
            loading="lazy"
            alt="Jane Cooper"
          />
        </figure>

        <div>
          <p class="card-title">{author}</p>

          <time class="card-date" datetime="2022-04-15">
            {date}
          </time>
        </div>
      </div>
    </div>
  </li>
  )
}

export default Comments