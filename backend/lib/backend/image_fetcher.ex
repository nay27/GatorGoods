defmodule Backend.ImageFetcher do
  use GenServer
  require Phoenix.Logger
  alias Backend.Repo
  alias Backend.Users.Item

  @name :image_fetcher

  # Client API

  def start_link(opts \\ []) do
    GenServer.start_link(__MODULE__, [], opts ++ [name: @name])
  end

  def get_image(image_type, item) do
    GenServer.cast(@name, {image_type, item})
  end

  # Server implementation

  def init(_), do: {:ok, []}

  def handle_cast({:image, item}, _state) do
    %HTTPoison.Response{body: image, headers: headers} = HTTPoison.get!(item.image_url, [], [{:follow_redirect, true}])
    Item.changeset(
    item,
    %{"image_binary" => image, "image_binary_type" => get_content_type(headers)}
    )
    |> Repo.update!
    {:noreply, []}
  end

  defp get_content_type(headers) do
    header_map = headers |> Map.new
    header_map["Content-Type"]
  end
end