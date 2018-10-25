defmodule Backend.Repo.Migrations.AddImagesToItems do
  use Ecto.Migration

  def change do
    alter table(:items) do
      add :image_binary, :binary
      add :image_binary_type, :string
    end
  end
end
