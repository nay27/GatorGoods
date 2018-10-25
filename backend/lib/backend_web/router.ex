defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BackendWeb do
    pipe_through :browser # Use the default browser stack
    resources "/items", ItemController
    get "/", PageController, :index
    get "/jonas", AboutController, :jonas
    get "/eric", AboutController, :eric
    get "/mariko", AboutController, :mariko
    get "/naylin", AboutController, :naylin
    #get "/fuldastudent1", AboutController, :fuldastudent1
    #get "/fuldastudent2", AboutController, :fuldastudent2
    #get "/fuldastudent3", AboutController, :fuldastudent3
    #get "/fuldastudent4", AboutController, :fuldastudent4
  end

  # Other scopes may use custom stacks.
  # scope "/api", BackendWeb do
  #   pipe_through :api
  # end
end
