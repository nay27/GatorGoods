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
    get "/c/:mode", CategoriesController, :create_default_categories
    get "/items/search", ItemController, :search
    resources "/items", ItemController
    get "/", ItemController, :index
    get "/image/:id", PageController, :image
    get "/about", AboutController, :index
    get "/about/jonas", AboutController, :jonas
    get "/about/eric", AboutController, :eric
    get "/about/mariko", AboutController, :mariko
    get "/about/naylin", AboutController, :naylin
  end

  # Other scopes may use custom stacks.
  # scope "/api", BackendWeb do
  #   pipe_through :api
  # end
end
