import "./App.css";
import {
  Tab,
  TabList,
  TabPanel,
  Container,
  Box,
  Icon,
  Typography,
  DataList,
  Button,
  Testimonials,
} from "./components";
import { useTabsContext } from "./components/tabs/Tabs";
import { testimonialsData } from "./data/testimonialsData";
import { BUTTON, COPYRIGHT, HOME_PAGE } from "./utils/constants";

const App = () => {
  const { setActiveIndex } = useTabsContext();

  const navigateToTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Box className="box" style={{ margin: "0 64px" }}>
        <TabList style={{ width: "100vw" }}>
          <Icon
            src="/src/icons/DSIcon.png"
            size={48}
            alt="Icon"
            style={{ marginRight: "20px" }}
          />
          <Tab index={0} label="Home" icon="🏠" iconPosition="left" Tab />
          <Tab
            index={1}
            label="Explore Data List"
            icon="📊"
            iconPosition="right"
          />
          <Tab index={2} label="Disabled" disabled />
        </TabList>
        <TabPanel
          index={0}
          style={{ maxWidth: "1280px", minHeight: "calc(100vh - 9rem)" }}
        >
          <Container>
            <Box className="box-header">
              <Box
                alignItems="flex-start"
                style={{ minWidth: "39%", padding: "0 24px" }}
              >
                <Typography
                  style={{ fontSize: "48px", fontWeight: "bold" }}
                  textColor="#90caf9"
                >
                  {HOME_PAGE.HEADER.TITLE}
                </Typography>
                <Typography variant="h3">
                  {HOME_PAGE.HEADER.SUBTITLE_1}
                </Typography>
                <Typography variant="h4">
                  {HOME_PAGE.HEADER.SUBTITLE_2}
                </Typography>
                <Typography variant="h4">
                  {HOME_PAGE.HEADER.SUBTITLE_3}
                </Typography>
                <Button variant="outline" onClick={() => navigateToTab(1)}>
                  {BUTTON.EXPLORE}
                </Button>
              </Box>
              <img
                src="/src/images/List-hero.png"
                alt="Data Visualization"
                style={{
                  width: "80%",
                  maxWidth: "600px",
                  minWidth: "60%",
                }}
              />
            </Box>
            <Box className="highlights">
              <Box style={{ alignItems: "center", textAlign: "center" }}>
                <Icon src="/src/icons/user-profile-icon.png" size={64} />
                <Typography variant="h4">
                  {HOME_PAGE.HIGHLIGHTS.TITLE_1}
                </Typography>
                <Typography variant="p">
                  {HOME_PAGE.HIGHLIGHTS.DETAILS_1}
                </Typography>
              </Box>
              <Box style={{ alignItems: "center", textAlign: "center" }}>
                <Icon src="/src/icons/detailed-analytics-icon.png" size={64} />
                <Typography variant="h4">
                  {HOME_PAGE.HIGHLIGHTS.TITLE_2}
                </Typography>
                <Typography variant="p">
                  {HOME_PAGE.HIGHLIGHTS.DETAILS_2}
                </Typography>
              </Box>
              <Box style={{ alignItems: "center", textAlign: "center" }}>
                <Icon src="/src/icons/global-icon.png" size={64} />
                <Typography variant="h4">
                  {HOME_PAGE.HIGHLIGHTS.TITLE_3}
                </Typography>
                <Typography variant="p">
                  {HOME_PAGE.HIGHLIGHTS.DETAILS_3}
                </Typography>
              </Box>
            </Box>
            <Testimonials testimonials={testimonialsData} />
          </Container>
        </TabPanel>
        <TabPanel
          index={1}
          style={{ maxWidth: "1280px", minHeight: "calc(100vh - 9rem)" }}
        >
          <DataList endpoint="https://jsonplaceholder.typicode.com/posts" />
        </TabPanel>
        <TabPanel index={2}>
          <Typography variant="p"> {BUTTON.DISABLED}</Typography>
        </TabPanel>
      </Box>
      <footer
        style={{
          marginTop: "48px",
          padding: "16px 64px",
          backgroundColor: "#3d444d",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="p" textColor="#fff">
          &copy; {new Date().getFullYear()} {COPYRIGHT.EXPLORE}
        </Typography>
      </footer>
    </div>
  );
};

export default App;
