import '../assets/css/messenger.css';
import Sidebar from '../components/Sidebar.jsx';
import Content from '../components/Content.jsx';

export default function Messenger() {
  return (
    <div className="messenger">
      <Sidebar />
      <Content />
    </div>
  );
}