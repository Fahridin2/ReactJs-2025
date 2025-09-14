
import Header from './components/Header/Header.jsx'
import StoryTray from './StoryTray.jsx'
import Footer  from './components/Footer/Footer.jsx'
import ProfileCard from './components/Profile-card/ProfileCard.jsx'


export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProfileCard
          name="Fahridin Akbaraliev"
          email="Akbaraliev@example.com"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </main>
      <Footer />
    </div>
  );
}

