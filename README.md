# goml-visualizer
<b>goml-visualizer (in progress): </b><br><br>
![goml-visualizer-train](https://github.com/vtech6/goml-visualizer/blob/main/trainVisualizer.gif) <br>
![goml-visualizer-test](https://github.com/vtech6/goml-visualizer/blob/main/testVisualizer.gif)<br><br>
The goml-visualizer is a companion app for my [goml - Neural Networks from Scratch in Go](https://github.com/vtech6/goml) repo. Using Go with [Wails](https://wails.io) and React allows us to build beautiful cross-platform apps, which can run both locally on Windows and MacOS as well as in the browser. The visualizer utilizes the goml package to run <b>regression</b> and <b>binary crossentropy</b> on the [Iris dataset](https://www.kaggle.com/datasets/uciml/iris). <b>Train mode</b> allows you to view your train data and compare features on a two dimmensional graph. <b>Test mode</b> allows you to check which elements were correctly classified by the neural network.<br><br>
<b>Stack</b>
- Backend: Go + [Wails](https://wails.io)
- Frontend: Typescript + React + Redux + D3
  
<b>Roadmap:</b>
- Run the goml package from the UI
- Track progress of the training
- Show correct and erroneous predictions
- Compare training and test datasets<br>

<b>How to run</b>
- Make sure you have a valid Go installation by running `go version`
- Clone the repo
- Run with `go mod tidy`
- Run `wails doctor` to check if everything is fine with your installation
- `wails dev` will start a dev session of the app
- Alternatively, you can do `cd frontend`, then `npm install` and `npm run dev` to run the app in the browser. It won't look as good, because the browser window isn't translucent.


