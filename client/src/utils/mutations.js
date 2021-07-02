import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_RESTAURANT = gql`
  mutation saveRestaurant(
    $id: String!
    $name: String!
    $rating: String
    $price: String
    $location: String
    $city: String
    $phone: String
    $image_url: String
    $url: String
  ) {
    saveRestaurant(
      id: $id
      name: $name
      rating: $rating
      price: $price
      location: $location
      city: $city
      phone: $phone
      image_url: $image_url
      url: $url
    ) {
      event
      savedRestaurants {
        id
        name
        rating
        price
        location
        city
        phone
        image_url
        url
      }
    }
  }
`;
