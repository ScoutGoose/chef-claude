import claudeIcon from "../images/chef-claude-icon.png";
export default function Header() {
  return (
    <>
      <header>
        <div className="title">
          <img src={claudeIcon} alt="Chef Claude Icon" className="main-icon" />
          <h1>Chef Claude</h1>
        </div>
      </header>
    </>
  );
}
