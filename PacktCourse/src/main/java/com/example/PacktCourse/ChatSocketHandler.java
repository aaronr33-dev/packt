package com.example.PacktCourse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.UnicastProcessor;

public class ChatSocketHandler implements WebSocketHandler {

    private UnicastProcessor<String> eventPublisher = UnicastProcessor.create();

    private Flux<String> outputEvents;

    public ChatSocketHandler(){
        this.outputEvents = eventPublisher.publish().autoConnect();
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        WebSocketMessageSubscriber webSocketMessageSubscriber = new WebSocketMessageSubscriber(eventPublisher);
        session.recieve()
            .map(WebSocketMessage::getPayloadAsText)
            .subscribe(WebSocketMessageSubscriber::onNext,
                    webSocketMessageSubscriber::onError,
                    webSocketMessageSubscriber::onComplete);

        return session.send(outputEvents.map(session::textMessage));
    }


    private static class WebSocketMessageSubscriber {
        private UnicastProcessor<String> eventPublisher;
        private String username;

        public WebSocketMessageSubscriber(UnicastProcessor<String> eventPublisher) {
            this.eventPublisher = eventPublisher
        };
         public void onNext(String message){
             if(username == null){
                 JsonNode jsonEvent = toJson(message);
                 this.username = jsonEvent.get("username").asText();
                 systeJoinUserMessage();
             } else {
                 eventPublisher.onNext(message);
             }
         }

         private void systeJoinUserMessage (){
             eventPublisher.onNext("{\"username\":\"system\",\"content\":\"" + username + " joined your channel\"}");
         }

         public void onComplete(){
             eventPublisher.onNext("{\"username\":\"system\",\"content\":\"" + username + " left your channel\"}");
         }

         public void onError(Throwable error){
             error.printStackTrace();
         }

         private JsonNode toJson(String event){

         }

    }

}
