import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>  // Like This here I am using
                <App />
           </BrowserRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);