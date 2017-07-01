import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="LoadingImageWrapper">
      <img src="/public/img/loading.png" alt="" className="LoadingImage" />
    </div>
  );
}

export default Loading;
