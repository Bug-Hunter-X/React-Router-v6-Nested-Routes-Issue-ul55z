```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `BrowserRouter`, `Routes`, and `Route` components from `react-router-dom` v6.  The issue might be that the nested routes are not working as expected.  For example, links might not navigate correctly, or the components might not render.