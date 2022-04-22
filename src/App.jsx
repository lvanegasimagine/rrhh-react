import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;

// <VStack p={4}>
//       <IconButton
//         icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
//         isRound='true'
//         size='lg'
//         alignSelf='flex-end'
//         onClick={toggleColorMode}
//       />
//       <Heading
//         mb='8'
//         fontWeight='extrabold'
//         size='2xl'
//         bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
//         bgClip='text'
//       >
//         Todo Application
//       </Heading>
//       <TodoList todos={todos} deleteTodo={deleteTodo} />
//       <AddTodo addTodo={addTodo} />
//     </VStack>
