# goml-visualizer

<b>Goml Visualizer (in progress): </b><br><br>
![goml-visualizer](https://github.com/vtech6/goml/blob/main/visualizer.gif) <br><br>
The Goml Visualizer was written using [Wails](https://wails.io) with React in Typescript for the frontend. The gif above is from an early version of the visualizer that shows the dataset after BinaryClassification.<br><br>
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
<br><b>Stack</b>
- Backend: Go + [Wails](https://wails.io)
- Frontend: Typescript + React + Redux + D3
