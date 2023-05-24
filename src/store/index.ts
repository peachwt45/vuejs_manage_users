import { createStore, Store } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

interface User {
  id: number;
  name: string;
  birthday: string;
  phoneNumber: string;
  address: string;
  username: string;
  password: string;
}

interface State {
  users: User[];
}

const store: Store<State> = createStore<State>({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state: State, users: User[]) {
      state.users = users;
    },
    addUser(state: State, user: User) {
      state.users.push(user);
    },
    editUser(state: State, user: User) {
      const index = state.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        state.users[index] = user;
      }
    },
    deleteUser(state: State, userId: number) {
      state.users = state.users.filter((u) => u.id !== userId);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('/api/users'); // Replace with your API endpoint
        commit('setUsers', response.data);
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to fetch users', 'error');
      }
    },
    async addUser({ commit }, user: User) {
      try {
        const response = await axios.post('/api/users', user); // Replace with your API endpoint
        commit('addUser', response.data);
        Swal.fire('Success', 'User added successfully', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to add user', 'error');
      }
    },
    async editUser({ commit }, user: User) {
      try {
        const response = await axios.put(`/api/users/${user.id}`, user); // Replace with your API endpoint
        commit('editUser', response.data);
        Swal.fire('Success', 'User updated successfully', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to update user', 'error');
      }
    },
    async deleteUser({ commit }, userId: number) {
      try {
        await axios.delete(`/api/users/${userId}`); // Replace with your API endpoint
        commit('deleteUser', userId);
        Swal.fire('Success', 'User deleted successfully', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to delete user', 'error');
      }
    },
  },
});

export default store;

