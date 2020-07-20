package com.example.Client;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;

import java.net.URISyntaxException;
import java.time.Duration;

@Configuration
public class SocketClient {

    @Bean
    public WebSocketClient client() throws URISyntaxException {
        SocketClient client = new ReactorNettyWebSocketClient();
        client.execute(new URI("ws://localhost:8080/ws",) session -> {
            return session.send(
                Flux.interval(Duration.ofSeconds(1))
                    .map(l -> String.format("%d", l))
                    .map(session::textmessage));

        }).block(Duration.ofDays(1));
        return client;
    }

}
