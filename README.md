# Bloc Builder React

A React Component that renders itself based on the latest snapshot emitted by a Subject. This is based on the StreamBuilder Widget by Flutter. The proposal of this component is helping the introduction of the BLoC Pattern concepts or any variation in React environment. As the BLoC pattern uses reactive programming patterns, this component was built to work properly with ReactiveX library, in this case, [RxJS](https://rxjs-dev.firebaseapp.com/j).

## Get Started

> npm install bloc-builder-react

### React Component

```javascript

<BlocBuilder
    initialValue= {<optional initial value>}
    subject = {<your rxjs subject>}
    builder = { 
      (snapshot) => {
          return <your jsx component>;
      }
    }}
/>
```

#### Subject
An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. Here we have a subject to each BlocBuilder. Any Subject variant can be used.

#### Builder
A function that returns the Snapshot value and render itself based on the latest snapshot emitted.

#### InitialValue
That's an optional parameter. When the BlocBuilder inits, if there's no action from the subject, then the BlocBuilder will render once with the InitialValue as the snapshot data.

### Snapshot
The snapshot is the value received from the Subject, that means, every time the Subject send new data to their Observer, the BlocBuilder will render with the data received. 

#### Snapshot.data
Contains the data from the builder. It can be null if an error happens in the Subscription or the Subject. 

#### Snapshot.connectionState
Contains the state of the connection with the stream. So far, it can be: -1 (Waiting), 0(Active) and 1(Done)

#### Snapshot.error
Contains the error. It can be null if no error has been dispatched.
