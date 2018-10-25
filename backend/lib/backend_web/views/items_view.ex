defmodule BackendWeb.ItemsView do
  use BackendWeb, :view

  def items(conn) do
      case conn.assigns[:items] do
          items -> items
      end
  end

  def format_price(cents) do
    if is_number(cents) do
      dollars = Integer.floor_div(cents, 100) |> Integer.to_string
      asdf = Integer.mod(cents, 100) |> Integer.to_string |> String.pad_leading(2, "0")
      "$#{dollars}.#{asdf}"
    else
        '$0.00'
    end
  end

  def image_path(rel) do
      "/images/" <> rel
  end
end