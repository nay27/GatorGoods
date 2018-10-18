defmodule Backend.Repo.Migrations.Item do
  use Ecto.Migration

  def change do
    create table(:item) do
      add :title, :varchar(60)
      add :description, :varchar(500)
      add :price, :integer
      add :seller, Backend.User
      add :category, Backend.Category
      add :image, Backend.Images
      add :status, :string
      add :onlyVisibleToFaculty, :boolean

      timestamps
    end
  end
end
