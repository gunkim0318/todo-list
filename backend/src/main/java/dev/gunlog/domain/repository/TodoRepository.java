package dev.gunlog.domain.repository;

import dev.gunlog.domain.entity.Member;
import dev.gunlog.domain.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * 할 일 레포지토리
 */
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findAllByMember(Member member);
    Optional<Todo> findByIdAndMember(long id, Member member);
}