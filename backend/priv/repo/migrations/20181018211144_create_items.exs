defmodule Backend.Repo.Migrations.CreateItems do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :title, :string
      add :description, :string
      add :price, :integer
      add :status, :string
      add :onlyVisibleToFaculty, :boolean, default: false, null: false

      timestamps()
    end

    create table(:users) do
      add :firstname, :string, size: 50
      add :lastname, :string, size: 50
      add :facultyMember, :boolean
      add :moderator, :boolean
      add :blacklisted, :boolean
      has_many :items, Item
      timestamps()
    end

  end
end
