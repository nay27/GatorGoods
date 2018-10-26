defmodule Backend.Repo.Migrations.CreateItem do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :title, :string
      add :description, :string
      add :price, :integer
      add :status, :string

      timestamps()
    end
  end
end
