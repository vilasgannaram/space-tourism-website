import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './index.scss';

import {
  Root,
  Home,
  Destination,
  Moon,
  Mars,
  Europa,
  Titan,
  Crew,
  Commandor,
  MissionSpecialist,
  Pilot,
  FlightEngineer,
  Technology,
  LaunchVehicle,
  SpaceCapsule,
  SpacePort,
} from './routes';

import data from '../data.json';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />

      <Route path='destination' element={<Destination />}>
        <Route index element={<Moon data={data.destinations[0]} />} />
        <Route path='mars' element={<Mars data={data.destinations[1]} />} />
        <Route path='europa' element={<Europa data={data.destinations[2]} />} />
        <Route path='titan' element={<Titan data={data.destinations[3]} />} />
      </Route>

      <Route path='crew' element={<Crew />}>
        <Route index element={<Commandor data={data.crew[0]} />} />
        <Route path='2' element={<MissionSpecialist data={data.crew[1]} />} />
        <Route path='3' element={<Pilot data={data.crew[2]} />} />
        <Route path='4' element={<FlightEngineer data={data.crew[3]} />} />
      </Route>

      <Route path='technology' element={<Technology />}>
        <Route index element={<LaunchVehicle data={data.technology[0]} />} />
        <Route path='2' element={<SpaceCapsule data={data.technology[1]} />} />
        <Route path='3' element={<SpacePort data={data.technology[2]} />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
