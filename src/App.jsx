
import React from 'react';
import PropTypes from 'prop-types';
import "./App.css";
import ServicePage1 from "././pages/ServicePage1/ServicePage1";
import MarketingDigital from "././pages/MarketingDigital/MarketingDigital";
import CreationDeContenu from "././pages/CreationDeContenu/CreationDeContenu";
import DesignEtBranding from "././pages/DesignEtBranding/DesignEtBranding";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import HomePage from "./pages/HomePage/HomePage";
import AgencePage from "./pages/AgencePage/AgencePage";
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from "./pages/ErrorPage/ErrorPage";


import { createBrowserRouter, RouterProvider } from "react-router-dom"; 


// Définit un composant fonctionnel pour intégrer Header et Footer autour du contenu enfant
const LayoutWithHeaderFooter = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

LayoutWithHeaderFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

// Crée un routeur en utilisant la fonction createBrowserRouter de React Router
const router = createBrowserRouter([
  {
    path: "/", 
    element: <LayoutWithHeaderFooter><HomePage /></LayoutWithHeaderFooter>, 
  },
  {
    path: "agence", 
    element: <LayoutWithHeaderFooter><AgencePage /></LayoutWithHeaderFooter>, 
  },
  {
    path: "contact", 
    element: <LayoutWithHeaderFooter><ContactPage /></LayoutWithHeaderFooter>, 
  },
  {
    path: "servicePage1", 
    element: <LayoutWithHeaderFooter><ServicePage1/></LayoutWithHeaderFooter>, 
  },
  {
    path: "marketing-digital", 
    element: <LayoutWithHeaderFooter><MarketingDigital/></LayoutWithHeaderFooter>, 
  },
  {
    path: "creation-Contenu", 
    element: <LayoutWithHeaderFooter><CreationDeContenu/></LayoutWithHeaderFooter>, 
  },
  {
    path: "design-Branding", 
    element: <LayoutWithHeaderFooter><DesignEtBranding/></LayoutWithHeaderFooter>, 
  },
  {
    path: "*", 
    element: <LayoutWithHeaderFooter><ErrorPage /></LayoutWithHeaderFooter>, 
  },
]);

export default function App() {
 
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}