
const Header = ({ toggle, isOpen }) => {
  return (
    <div className="header">
      <div className='burger'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <h1>Task Tracker</h1>
      <h3>Alert Icon</h3>
    </div>
  );
};

export default Header;
