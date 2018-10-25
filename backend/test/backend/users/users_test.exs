defmodule Backend.UsersTest do
  use Backend.DataCase

  alias Backend.Users

  describe "items" do
    alias Backend.Users.Item

    @valid_attrs %{description: "some description", onlyVisibleToFaculty: true, price: 42, status: "some status", title: "some title"}
    @update_attrs %{description: "some updated description", onlyVisibleToFaculty: false, price: 43, status: "some updated status", title: "some updated title"}
    @invalid_attrs %{description: nil, onlyVisibleToFaculty: nil, price: nil, status: nil, title: nil}

    def item_fixture(attrs \\ %{}) do
      {:ok, item} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Users.create_item()

      item
    end

    test "list_items/0 returns all items" do
      item = item_fixture()
      assert Users.list_items() == [item]
    end

    test "get_item!/1 returns the item with given id" do
      item = item_fixture()
      assert Users.get_item!(item.id) == item
    end

    test "create_item/1 with valid data creates a item" do
      assert {:ok, %Item{} = item} = Users.create_item(@valid_attrs)
      assert item.description == "some description"
      assert item.onlyVisibleToFaculty == true
      assert item.price == 42
      assert item.status == "some status"
      assert item.title == "some title"
    end

    test "create_item/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Users.create_item(@invalid_attrs)
    end

    test "update_item/2 with valid data updates the item" do
      item = item_fixture()
      assert {:ok, item} = Users.update_item(item, @update_attrs)
      assert %Item{} = item
      assert item.description == "some updated description"
      assert item.onlyVisibleToFaculty == false
      assert item.price == 43
      assert item.status == "some updated status"
      assert item.title == "some updated title"
    end

    test "update_item/2 with invalid data returns error changeset" do
      item = item_fixture()
      assert {:error, %Ecto.Changeset{}} = Users.update_item(item, @invalid_attrs)
      assert item == Users.get_item!(item.id)
    end

    test "delete_item/1 deletes the item" do
      item = item_fixture()
      assert {:ok, %Item{}} = Users.delete_item(item)
      assert_raise Ecto.NoResultsError, fn -> Users.get_item!(item.id) end
    end

    test "change_item/1 returns a item changeset" do
      item = item_fixture()
      assert %Ecto.Changeset{} = Users.change_item(item)
    end
  end
end
