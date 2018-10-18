defmodule Backend.Repo.Migrations.AddTablesToItems do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :firstname, :varchar
      add :lastname, :varchar
      add :facultyMember, :boolean
      add :moderator, :boolean
      add :blacklisted, :boolean
#      has_many :items, Item
#      has_many :messages, Message
      timestamps()
    end

    create table(:messages) do
#      add :recipient, User
#      add :sender, User
      add :sentAt, :datetime
#      add :item, Item
      add :content, :varchar
#      add :location, Location
      timestamps()
    end

    create table(:locations) do
      add :name, :varchar
      add :map, :varchar
      timestamps()
    end

    create table(:categories) do
      add :name, :varchar
      timestamps()
    end
  end
end
