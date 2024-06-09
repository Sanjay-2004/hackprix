import React from 'react'
import Dictaphone from './Dictaphone'
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"
import Dashboard from './pages/Dashboard'
import Results from './pages/Results'
import TopicDetail from './components/TopicComponent'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Interview from './pages/Interview'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route index path="/" element={<Home />} /> */}
      <Route index path="/" element={<><SignedIn><Dashboard /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/custom" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/frontend" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/backend" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/fullstack" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/devops" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/soft-test" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/proj-man" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/ui-ux" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/marksppe" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/interview" element={<><SignedIn><Interview /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
    </>
  )
)

const App = () => {
  return (
    <>
      {/* <Dictaphone /> */}
      {/* <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button>Sign In</Button>
      </SignedOut> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/custom" element={<TopicDetail />} />
          <Route path="/frontend" element={<TopicDetail />} />
          <Route path="/backend" element={<TopicDetail />} />
          <Route path="/fullstack" element={<TopicDetail />} />
          <Route path="/devops" element={<TopicDetail />} />
          <Route path="/soft-test" element={<TopicDetail />} />
          <Route path="/proj-man" element={<TopicDetail />} />
          <Route path="/ui-ux" element={<TopicDetail />} />
          <Route path="/prod-man" element={<TopicDetail />} />
          <Route path="/mark-spe" element={<TopicDetail />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
      {/* <Results /> */}

      {/* <CardComponent title="Card Title" description="Card Description" tags={["tag1", "tag2", "tag3"]} /> */}

    </>
  )
}

export default App
