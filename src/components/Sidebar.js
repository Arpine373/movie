import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="avatar"
        />
        <span>Daniel</span>
      </div>

      <nav className="nav">
        <ul>
          <li><i>🔍</i> Search</li>
          <li className="active"><i>🏠</i> Home</li>
          <li><i>📺</i> TV Shows</li>
          <li><i>🎬</i> Movies</li>
          <li><i>🎭</i> Genres</li>
          <li><i>🕒</i> Watch Later</li>
        </ul>
      </nav>

      <div className="footer">
        <p>LANGUAGE</p>
        <p>GET HELP</p>
        <p>EXIT</p>
      </div>
    </aside>
  );
}

